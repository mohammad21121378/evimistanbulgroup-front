import NotFound from "@/components/404";
import Layout from "@/components/Layout";

export const metadata = 
{
    title: 'The desired page was not found'
}

export default function LocalizedNotFound(){
    return <Layout><NotFound /></Layout>;
}