import * as XLSX from "xlsx";

interface EmailsProps {
  emails: string[];
}

export default function Emails({ emails }: EmailsProps) {
  // Function to export emails to Excel
  const exportToExcel = () => {
    // Create a worksheet from the emails array
    const worksheet = XLSX.utils.json_to_sheet(
      emails.map((email) => ({ Email: email }))
    );
    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Emails");

    // Export the workbook as an Excel file
    XLSX.writeFile(workbook, "emails.xlsx");
  };

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Emails
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {email}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Add a button to export to Excel */}
      <button
        onClick={exportToExcel}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Export to Excel
      </button>
    </div>
  );
}
