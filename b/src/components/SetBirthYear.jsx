import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { EDIT_BIRTH_YEAR } from "../graphql/mutations/authorsMutation";
import { ALL_AUTHORS_QUERY } from "../graphql/queries/authorsQuery";

const SetBirthYear = () => {
    const [author, setAuthor] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const result = useQuery(ALL_AUTHORS_QUERY);
    const [editBirthYear] = useMutation(EDIT_BIRTH_YEAR, {
        refetchQueries: [{ query: ALL_AUTHORS_QUERY }]
    });

    // Update the author name and birth year state
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "author") {
            setAuthor(value);
        } else {
            setBirthYear(parseInt(value, 10));
        }
    }

    // Mutation to set the birth year of an author
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!author || isNaN(birthYear)) {
            console.error("Invalid input: Author name or birth year is missing.");
            return;
        }

        try {
            await editBirthYear({ variables: { name: author, setToBorn: birthYear } });
            setAuthor("");
            setBirthYear(0);
        } catch (error) {
            console.error("Error setting birth year:", error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col mx-auto mt-12">
            <select name="author" value={author} onChange={handleChange} className="border border-gray-600 bg-white p-2 mb-4">
                <option value="">Select author</option>
                {result.data.allAuthors.map((author) => (
                    <option key={author.id} value={author.name} className="border border-white bg-gray-400">{author.name}</option>
                ))}
            </select>
            <input
                type="number"
                name="birthYear"
                value={birthYear}
                onChange={handleChange}
                placeholder="Birth year"
                className="border border-gray-600 bg-white p-2 mb-4"
            />
            <button
                type="submit"
                className="cursor-pointer bg-gray-500 active:bg-gray-300 text-white p-2 rounded-md"
            >
                Set birth year
            </button>
        </form>
    )
}

export default SetBirthYear;