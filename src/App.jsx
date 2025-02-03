import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import FormPage from "./FormPage";
import SummaryPage from "./SummaryPage";

function App () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        race: "",
        school: "",
        major: "",
    });
    const [currentPage, setCurrentPage] = useState(0)

    const pages = [
        [
          { id: "name", label: "Name", type: "text" },
          { id: "email", label: "Email", type: "email" },
          { id: "phone", label: "Phone Number", type: "tel" },
        ],
        [
          { id: "gender", label: "Gender", type: "text" },
          { id: "race", label: "Race", type: "text" },
        ],
        [
          { id: "school", label: "School", type: "text" },
          { id: "major", label: "Major", type: "text" },
        ],
    ];

    function renderCurrentPage(currentPage) {
        const page = pages[currentPage];
        if (currentPage <= 2 && currentPage >= 0) {
            return (
                <FormPage
                    key={currentPage}
                    index={currentPage}
                    page={page}
                    formData={formData}
                    setFormData={setFormData}
                />
            );
        } else {
            return (
                <SummaryPage formData={formData} />
            )
        }
    }

    function validateCurrentPage() {
        const pageFields = pages[currentPage]

        for (let field of pageFields) {
            if (formData[field.id] === "") {
                return false
            }
        }

        return true
    }

    function handleNext() {
        if (currentPage < 3 && validateCurrentPage()) {
            setCurrentPage((currentPage) => currentPage + 1)
        } else if (currentPage + 1 === 3) {
            setCurrentPage(3)
        }
    }

    function handleBack() {
        if (currentPage > 0 ) {
            setCurrentPage((currentPage) => currentPage - 1)
        }
    }

    return (
        <div>
            {renderCurrentPage(currentPage)}
            <button onClick={handleNext}>Next</button>
            <button onClick={handleBack}>Back</button>
            <footer>{currentPage + 1}</footer>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)