function DynamicBackground({ imageUrl }) {
  return (
    <div
      className={`w-full h-[604px] bg-cover bg-center rounded-3xl shadow-lg`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Other content here */}
    </div>
  );
}

export default DynamicBackground;
