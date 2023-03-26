import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import Loading from "../../../Components/Loading/Loading";
import { AuthContext } from "../../../Context/UserContext";
import { ApiContext } from "../../../DataContext.js/DataContext";
import Bookinfo from "../Bookinfo/Bookinfo";
// import { useLoaderData } from "react-router-dom";

const BookingInfo = () => {
  const { bookInfo } = useContext(ApiContext);
  const { loading } = useContext(AuthContext);
  // const [remaining , setRemaining] = useState(bookInfo);
  console.log(bookInfo);

  const handleDelete = (id) => {
    const agree = window.confirm("are you sure you want to delete?");
    if (agree) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("deleted successfully");
            window.location.reload();
          }
        });
    }
  };
  if (loading) {
    return <Loading></Loading>;
  }
  // const { packageName,contact,userName,totalPrice, } = bookInfo;
  return (
    <div>
      <div>
        <h4 className="w-50 m-auto text-primary fw-semibold mt-5 mb-5">
          See Your Booking Details Here
        </h4>
      </div>
      <section className="w-50  m-auto">
        {bookInfo.map((book) => (
          <Bookinfo
            book={book}
            key={book._id}
            handleDelete={handleDelete}
          ></Bookinfo>
        ))}
      </section>
    </div>
  );
};

export default BookingInfo;