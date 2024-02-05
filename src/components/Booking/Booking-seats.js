// import React, { useState, useEffect } from "react";
// import "./Booking-seats.css";

// const Seat = ({
//   seatId,
//   isSelected,
//   onSelect,
//   isBookingComplete,
//   bookedSeats,
// }) => {
//   const [isBooked, setIsBooked] = useState(
//     (isBookingComplete && isSelected) || bookedSeats.includes(seatId)
//   );

//   useEffect(() => {
//     setIsBooked(
//       (isBookingComplete && isSelected) || bookedSeats.includes(seatId)
//     );
//   }, [isBookingComplete, isSelected, seatId, bookedSeats]);

//   const seatStyle = {
//     backgroundColor: isBooked ? "#3e0340" : isSelected ? "green" : "white",
//     cursor: "pointer",
//     margin: "5px",
//     padding: "5px",
//     width: "10px",
//     height: "10px",
//   };

//   return <div style={seatStyle} onClick={() => onSelect(seatId)}></div>;
// };

// const SeatBooking = () => {
//   const totalRows = 7;
//   const seatsPerRow = 8;
//   const totalSeats = totalRows * seatsPerRow;

//   const [selectedSeats, setSelectedSeats] = useState({});
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [isBookingComplete, setIsBookingComplete] = useState(false);

//   const getBookedSeatsFromLocalStorage = () => {
//     try {
//       const storedData = localStorage.getItem("bookedSeats");
//       return storedData ? JSON.parse(storedData) : {};
//     } catch (error) {
//       console.error("Error reading from local storage:", error);
//       return {};
//     }
//   };

//   const [bookedSeats, setBookedSeats] = useState(() =>
//     getBookedSeatsFromLocalStorage()
//   );

//   const movies = ["Avengers Endgame (200)", "Toy Story 4 (150)", "Joker (250)"];

//   const handleSeatSelect = (seatId) => {
//     setSelectedSeats((prevSelectedSeats) => {
//       const currentSelectedSeats = { ...prevSelectedSeats };
//       if (!currentSelectedSeats[selectedMovie]) {
//         currentSelectedSeats[selectedMovie] = [];
//       }
//       if (currentSelectedSeats[selectedMovie].includes(seatId)) {
//         currentSelectedSeats[selectedMovie] = currentSelectedSeats[
//           selectedMovie
//         ].filter((id) => id !== seatId);
//       } else {
//         currentSelectedSeats[selectedMovie] = [
//           ...currentSelectedSeats[selectedMovie],
//           seatId,
//         ];
//       }

//       return currentSelectedSeats;
//     });
//   };

//   const handleMovieSelect = (e) => {
//     const newMovie = e.target.value;
//     setSelectedMovie(newMovie);
//     setSelectedSeats((prevSelectedSeats) => ({
//       ...prevSelectedSeats,
//       [newMovie]: [],
//     }));
//     setIsBookingComplete(false);
//   };

//   const handleBookSeats = () => {
//     setIsBookingComplete(true);
//     setBookedSeats((prevBookedSeats) => ({
//       ...prevBookedSeats,
//       [selectedMovie]: [
//         ...(prevBookedSeats[selectedMovie] || []),
//         ...selectedSeats[selectedMovie],
//       ],
//     }));
//   };

//   useEffect(() => {
//     try {
//       localStorage.setItem("bookedSeats", JSON.stringify(bookedSeats));
//     } catch (error) {
//       console.error("Error writing to local storage:", error);
//     }
//   }, [bookedSeats]);

//   const getSelectedSeatsCount = () => {
//     return selectedSeats[selectedMovie]?.length || 0;
//   };

//   const boxSize = "15px";

//   return (
//     <div className="page-container">
//       <div className="movie-section">
//         <label
//           htmlFor="movies"
//           style={{
//             marginRight: "10px",
//             color: "#ba19bf",
//             fontSize: "12PX",
//             fontWeight: "800",
//           }}
//         >
//           SELECT A MOVIE :
//         </label>
//         <select
//           id="movies"
//           onChange={handleMovieSelect}
//           value={selectedMovie || ""}
//         >
//           <option value="" disabled>
//             Select a movie
//           </option>
//           {movies.map((movie, index) => (
//             <option key={index} value={movie}>
//               {movie}
//             </option>
//           ))}
//         </select>

//         {selectedMovie && (
//           <div>
//             <div className="text-information">
//               <div
//                 className="box"
//                 style={{
//                   backgroundColor: "white",
//                   width: "20px",
//                   height: "20px",
//                   marginRight: "10px",
//                   marginLeft: "0px",
//                 }}
//               ></div>
//               <p style={{ fontSize: "14px", fontWeight: "600" }}>N/A</p>
//               <div
//                 className="box"
//                 style={{
//                   backgroundColor: "green",
//                   width: "20px",
//                   height: "20px",
//                   marginRight: "10px",
//                   marginLeft: "20px",
//                 }}
//               ></div>
//               <p style={{ fontSize: "14px", fontWeight: "600" }}>Selected</p>
//               <div
//                 className="box"
//                 style={{
//                   backgroundColor: "#3e0340",
//                   width: "20px",
//                   height: "20px",
//                   marginRight: "10px",
//                   marginLeft: "20px",
//                 }}
//               ></div>
//               <p style={{ fontSize: "14px", fontWeight: "600" }}>Occupied</p>
//             </div>
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: `repeat(${seatsPerRow}, 1fr)`,
//                 gap: "5px",
//                 justifyContent: "center",
//                 backgroundColor: "buttonface",
//               }}
//             >
//               {[...Array(totalSeats).keys()].map((seatId) => (
//                 <Seat
//                   key={seatId}
//                   seatId={seatId + 1}
//                   isSelected={selectedSeats[selectedMovie].includes(seatId + 1)}
//                   onSelect={handleSeatSelect}
//                   isBookingComplete={isBookingComplete}
//                   bookedSeats={bookedSeats[selectedMovie] || []}
//                   boxSize={boxSize}
//                 />
//               ))}
//             </div>

//             <div>
//               {isBookingComplete ? (
//                 <p>{`Seats booked: ${getSelectedSeatsCount()} for ${selectedMovie}`}</p>
//               ) : (
//                 <p>{`You have selected seats: ${getSelectedSeatsCount()}`}</p>
//               )}
//             </div>
//           </div>
//         )}

//         <button onClick={handleBookSeats}>BOOK</button>
//       </div>
//     </div>
//   );
// };

// export default SeatBooking;
import React, { useState, useEffect } from "react";
import "./Booking-seats.css";

const Seat = ({
  seatId,
  isSelected,
  onSelect,
  isBookingComplete,
  bookedSeats,
  moviePrices,
  selectedMovie,
}) => {
  const [isBooked, setIsBooked] = useState(
    (isBookingComplete && isSelected) || bookedSeats.includes(seatId)
  );

  useEffect(() => {
    setIsBooked(
      (isBookingComplete && isSelected) || bookedSeats.includes(seatId)
    );
  }, [isBookingComplete, isSelected, seatId, bookedSeats]);

  const seatStyle = {
    backgroundColor: isBooked ? "#3e0340" : isSelected ? "green" : "white",
    cursor: "pointer",
    margin: "5px",
    padding: "5px",
    width: "10px",
    height: "10px",
  };

  return (
    <div style={seatStyle} onClick={() => onSelect(seatId)}>
      {isSelected && (
        <div style={{ fontSize: "8px", color: "black" }}>
          {`$${moviePrices[selectedMovie]}`}
        </div>
      )}
    </div>
  );
};

const SeatBooking = () => {
  const totalRows = 7;
  const seatsPerRow = 8;
  const totalSeats = totalRows * seatsPerRow;

  const [selectedSeats, setSelectedSeats] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isBookingComplete, setIsBookingComplete] = useState(false);

  const getBookedSeatsFromLocalStorage = () => {
    try {
      const storedData = localStorage.getItem("bookedSeats");
      return storedData ? JSON.parse(storedData) : {};
    } catch (error) {
      console.error("Error reading from local storage:", error);
      return {};
    }
  };

  const [bookedSeats, setBookedSeats] = useState(() =>
    getBookedSeatsFromLocalStorage()
  );

  const moviePrices = {
    "Avengers Endgame (200)": 200,
    "Toy Story 4 (150)": 150,
    "Joker (250)": 250,
  };

  const handleSeatSelect = (seatId) => {
    setSelectedSeats((prevSelectedSeats) => {
      const currentSelectedSeats = { ...prevSelectedSeats };
      if (!currentSelectedSeats[selectedMovie]) {
        currentSelectedSeats[selectedMovie] = [];
      }
      if (currentSelectedSeats[selectedMovie].includes(seatId)) {
        currentSelectedSeats[selectedMovie] = currentSelectedSeats[
          selectedMovie
        ].filter((id) => id !== seatId);
      } else {
        currentSelectedSeats[selectedMovie] = [
          ...currentSelectedSeats[selectedMovie],
          seatId,
        ];
      }

      return currentSelectedSeats;
    });
  };

  const handleMovieSelect = (e) => {
    const newMovie = e.target.value;
    setSelectedMovie(newMovie);
    setSelectedSeats((prevSelectedSeats) => ({
      ...prevSelectedSeats,
      [newMovie]: [],
    }));
    setIsBookingComplete(false);
  };

  const handleBookSeats = () => {
    setIsBookingComplete(true);
    setBookedSeats((prevBookedSeats) => ({
      ...prevBookedSeats,
      [selectedMovie]: [
        ...(prevBookedSeats[selectedMovie] || []),
        ...selectedSeats[selectedMovie],
      ],
    }));
  };

  useEffect(() => {
    try {
      localStorage.setItem("bookedSeats", JSON.stringify(bookedSeats));
    } catch (error) {
      console.error("Error writing to local storage:", error);
    }
  }, [bookedSeats]);

  const getSelectedSeatsCount = () => {
    return selectedSeats[selectedMovie]?.length || 0;
  };

  const boxSize = "15px";

  return (
    <div className="page-container">
      <div className="movie-section">
        <label
          htmlFor="movies"
          style={{
            marginRight: "10px",
            color: "#ba19bf",
            fontSize: "12PX",
            fontWeight: "800",
          }}
        >
          SELECT A MOVIE :
        </label>
        <select
          id="movies"
          onChange={handleMovieSelect}
          value={selectedMovie || ""}
        >
          <option value="" disabled>
            Select a movie
          </option>
          {Object.keys(moviePrices).map((movie, index) => (
            <option key={index} value={movie}>
              {movie}
            </option>
          ))}
        </select>

        {selectedMovie && (
          <div>
            <div className="text-information">
              <div
                className="box"
                style={{
                  backgroundColor: "white",
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  marginLeft: "0px",
                }}
              ></div>
              <p style={{ fontSize: "14px", fontWeight: "600" }}>N/A</p>
              <div
                className="box"
                style={{
                  backgroundColor: "green",
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  marginLeft: "20px",
                }}
              ></div>
              <p style={{ fontSize: "14px", fontWeight: "600" }}>Selected</p>
              <div
                className="box"
                style={{
                  backgroundColor: "#3e0340",
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  marginLeft: "20px",
                }}
              ></div>
              <p style={{ fontSize: "14px", fontWeight: "600" }}>Occupied</p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${seatsPerRow}, 1fr)`,
                gap: "5px",
                justifyContent: "center",
                backgroundColor: "buttonface",
              }}
            >
              {[...Array(totalSeats).keys()].map((seatId) => (
                <Seat
                  key={seatId}
                  seatId={seatId + 1}
                  isSelected={selectedSeats[selectedMovie].includes(seatId + 1)}
                  onSelect={handleSeatSelect}
                  isBookingComplete={isBookingComplete}
                  bookedSeats={bookedSeats[selectedMovie] || []}
                  boxSize={boxSize}
                  moviePrices={moviePrices}
                  selectedMovie={selectedMovie}
                />
              ))}
            </div>

            <div>
              {isBookingComplete ? (
                <p>{`You have selected ${getSelectedSeatsCount()} seats for a price of  ${getSelectedSeatsCount() * moviePrices[selectedMovie]}`}</p>
              ) : (
                <p>{`You have selected ${getSelectedSeatsCount()} seats for a price of  ${getSelectedSeatsCount() * moviePrices[selectedMovie]}`}</p>
              )}
            </div>
          </div>
        )}

        <button onClick={handleBookSeats}>BOOK</button>
      </div>
    </div>
  );
};

export default SeatBooking;
