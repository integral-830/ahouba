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
    "regLink":string;
    "ruleBook":string
}

interface Image{
    image: string;
    text: string;
}

interface EventResponse{
    events: Array<EventDetails>;
    gallery: Array<Image>
    swipper: Array<Image>
}

const client = axios.create({
    baseURL: 'https://sg-01-api.jsonsilo.com',
    timeout: 10000,
});

async function fetchEventDetails(): Promise<AxiosResponse<EventResponse>> {
    return  await client.get<EventResponse>("/public/91774280-2d37-4eb0-a008-81523e56a974");
}

export const useFetchEventDetails = (): QueryObserverResult<EventResponse> => {
    return useQuery<EventResponse>({
        queryFn: async () => {
            const { data } = await fetchEventDetails();
            return data;
        },
        queryKey: [ 'response' ]
    });
};
