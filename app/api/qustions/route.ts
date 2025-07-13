// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { inngest } from "@/inngest/client";

// export async function POST(req: Request) {
//   try {
//     const { topic, difficulty_level, num_questions } = await req.json();

//     console.log("Received request to generate questions", {
//       topic,
//       difficulty_level,
//       num_questions,
//     });

//     // Send event to Inngest
//     const response = await inngest.send({
//       name: "questions_function",
//       data: {
//         topic,
//         difficulty_level,
//         num_questions,
//       },
//     });

//     const runId = response.ids?.[0];
//     if (!runId) {
//       return new Response(
//         JSON.stringify({ error: "Failed to start Inngest run" }),
//         {
//           status: 500,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//     }

//     // Polling logic with timeout
//     let runStatus;
//     let retries = 0;
//     const MAX_RETRIES = 30; // ~30 seconds max (1s delay per retry)

//     while (retries < MAX_RETRIES) {
//       runStatus = await getRunStatus(runId);
//       const status = runStatus?.[0]?.status;

//       if (status === "Completed") {
//         const result = runStatus?.[0]?.output;

//         return new Response(JSON.stringify({ success: true, data: result }), {
//           status: 200,
//           headers: { "Content-Type": "application/json" },
//         });
//       }

//       await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1s
//       retries++;
//     }

//     return new Response(JSON.stringify({ error: "Inngest run timed out" }), {
//       status: 504,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error: any) {
//     return new Response(
//       JSON.stringify({ error: error.message || "Internal Server Error" }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }

// // Helper function to fetch run status
// async function getRunStatus(runId: string) {
//   const url = `${process.env.INNGEST_SERVER_HOST}/v1/events/${runId}/runs`;

//   const response = await fetch(url, {
//     headers: {
//       Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
//     },
//   });

//   if (!response.ok) {
//     console.error("Failed to fetch run status:", response.statusText);
//     throw new Error(`Failed to fetch run status: ${response.statusText}`);
//   }

//   const json = await response.json();
//   return json.data;
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
import { inngest } from "@/inngest/client";

export async function POST(req: Request) {
  try {
    const { topic, difficulty_level, num_questions } = await req.json();

    if (!topic || !difficulty_level || !num_questions) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Received request to generate questions", {
      topic,
      difficulty_level,
      num_questions,
    });

    // Send event to Inngest
    const response = await inngest.send({
      name: "questions_function",
      data: {
        topic,
        difficulty_level,
        num_questions,
      },
    });

    const runId = response.ids?.[0];
    if (!runId) {
      return new Response(
        JSON.stringify({ error: "Failed to start Inngest run" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Polling logic with timeout
    const MAX_RETRIES = 30;
    const DELAY = 1000; // 1s
    let retries = 0;

    while (retries < MAX_RETRIES) {
      const runStatus = await getRunStatus(runId);
      const status = runStatus?.[0]?.status;

      if (status === "Completed") {
        const result = runStatus?.[0]?.output;

        return new Response(JSON.stringify({ success: true, data: result }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Optional: handle failure/timeout/error status here
      if (status === "Failed" || status === "Canceled") {
        return new Response(
          JSON.stringify({ error: `Inngest run ${status}` }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      await new Promise((resolve) => setTimeout(resolve, DELAY));
      retries++;
    }

    return new Response(JSON.stringify({ error: "Inngest run timed out" }), {
      status: 504,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("POST /api/questions error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// Helper function to fetch run status from Inngest
async function getRunStatus(runId: string) {
  const host = process.env.INNGEST_SERVER_HOST;
  const key = process.env.INNGEST_SIGNING_KEY;

  if (!host || !key) {
    throw new Error(
      "INNGEST_SERVER_HOST or INNGEST_SIGNING_KEY is not defined."
    );
  }

  const url = `${host}/v1/events/${runId}/runs`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });

  if (!response.ok) {
    console.error("Failed to fetch run status:", response.statusText);
    throw new Error(`Failed to fetch run status: ${response.statusText}`);
  }

  const json = await response.json();
  return json.data;
}
