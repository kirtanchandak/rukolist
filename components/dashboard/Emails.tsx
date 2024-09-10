// Define the interface for the props
interface EmailsProps {
  emails: string[];
}

// Functional component with typed props
export default function Emails({ emails }: EmailsProps) {
  return (
    <div>
      <h2>Emails:</h2>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
}
