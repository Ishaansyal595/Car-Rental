const TestimonialCard = ({ name, message, role, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-70 mx-auto text-center transition-transform duration-300 h-80 hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
      />
      <p className="text-gray-600 italic mb-3">"{message}"</p>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
};

export default TestimonialCard