import Swal from "sweetalert2";

export default function ErrorAlert({ error }) {

    return (
        Swal.fire({
            title: "Error",
            text: error?.message || "Something wrong please try again",
            icon: "error",
        })
    )
}