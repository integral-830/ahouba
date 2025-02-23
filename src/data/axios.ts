import axios, {AxiosResponse} from "axios";
import {QueryObserverResult, useQuery} from "@tanstack/react-query";

interface EventDetails {
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    time: string;
    venue: string;
    prize: string;
    fee: string;
    organiser: string;
    contact: string;
}

interface EventResponse{
    events: Array<EventDetails>;
}

const client = axios.create({
    baseURL: 'https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev',
    timeout: 10000,
});

async function fetchEventDetails(): Promise<AxiosResponse<EventResponse, any>> {
    return  await client.get<EventResponse>("event.json");
}

export const useFetchResponse = (): QueryObserverResult<EventResponse, any> => {
    return useQuery<EventResponse>({
        queryFn: async () => {
            const { data } = await fetchEventDetails();
            return data;
        },
        queryKey: [ 'response' ]
    });
};
