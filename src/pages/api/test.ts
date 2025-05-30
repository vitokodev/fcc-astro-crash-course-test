export async function GET() {

    return new Response(
        JSON.stringify({msg: "Hello World"}), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}

export async function POST({ request }) {
    const body = await request.json();
    return new Response(JSON.stringify(JSON.stringify(body)), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}