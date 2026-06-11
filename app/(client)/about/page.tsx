"use client";

import Test from './test';
import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
};

export default function About() {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        fetch("/api/supabase")
            .then((res) => res.json())
            .then((result) => {
                setData(result);
            });
    }, []);

    return (
        <>
            <h1>여기는 About 페이지 😆</h1>
            <Test />


            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>


    );
}