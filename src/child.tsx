const Children: React.FC<{
  name: string;
  onValueChange: (newValue: string) => void;
}> = ({ name, onValueChange }) => {
  const handleChange = (event: any) => {
    onValueChange(event.target.value);
  };

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
    </>
  );
};

export default Children;
