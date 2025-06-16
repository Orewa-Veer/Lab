interface Props {
  tag: string;
  color: string;
}
const RendTags = ({ tag, color }: Props) => {
  return (
    <>
      <div className={`${color} rounded-xl px-2 py-0.5 font-semibold text-sm`}>
        {tag}
      </div>
    </>
  );
};

export default RendTags;
