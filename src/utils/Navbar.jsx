import Counter from "../components/counter";
import Crud from "../components/crud";

export const navbar = [
    {
        id: 1,
        title: 'Counter',
        element: <Counter></Counter>,
        path: '/counter',
    },
    {
        id: 2,
        title: 'Crud',
        element: <Crud></Crud>,
        path: '/crud',
    }
]