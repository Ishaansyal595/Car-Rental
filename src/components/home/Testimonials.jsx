import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Amit Sharma",
    message: "This website exceeded my expectations!",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Mehta",
    message: "Smooth UI and excellent performance.",
    role: "Marketing Head",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ravi Kumar",
    message: "The best investment we’ve made for our store.",
    role: "Store Manager",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <h2 className="text-3xl font-bold">What Our Clients Say</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, index) => (
          <TestimonialCard
            key={index}
            name={t.name}
            message={t.message}
            role={t.role}
            image={t.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
