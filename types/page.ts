interface Params {
    mid: string;
    provider: string;
    userId: string;
}

interface SearchParams {
    [key: string]: string | string[] | undefined;
}

interface Page {
    params: Params;
    searchParams: SearchParams;
}

export default Page