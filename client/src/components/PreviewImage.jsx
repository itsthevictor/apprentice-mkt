const PreviewImage = ({ src }) => {
  return (
    <div className="thumbnail" style={{ backgroundImage: `url(${src})` }}></div>
  );
};
export default PreviewImage;
