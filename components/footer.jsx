export const Footer = (probs) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        copyright © {probs.year} {probs.fullName} {probs.studentId}
      </p>
    </div>
  );
};
