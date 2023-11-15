import exp from "constants";

export interface Menu {
    label: string;
    icon: string | JSX.Element | JSX.Element[],
    url: string;
}

export interface Item {
    title: string;
    cover: string;
    description: string;
}