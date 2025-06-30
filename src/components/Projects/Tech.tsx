interface TechProps {
  language: string;
  color: string;
}

function Tech(props: TechProps) {
  const { language, color } = props; // Default to black if language is not found

  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: "5px",
        padding: "5px",
        height: "auto",
        width: "auto",
        display: "inline-block",
      }}
    >
      {language}
    </span>
  );
}

export default Tech;
