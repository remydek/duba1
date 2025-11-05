import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    return new NextResponse(JSON.stringify({ data: "data here"}), { status: 200 });
}



export async function UPDATE(req: Request, { params }: { params: { id: string } }) {
    const body = await req.json();
    //  validate here
    const data = 2131
    return NextResponse.json(data, { status: 201 });
}



export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = await params;

    if (!id) {
        return NextResponse.json({ error: 'Missing id' }, { status: 400 });
        s: 500
    }
    return NextResponse.json({ error: 'Event deleted successfully' }, {
    status: 201
})
}
