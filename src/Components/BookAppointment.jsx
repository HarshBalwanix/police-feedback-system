"use client";
import React from "react";
import StarRating from "./StarRating";

function BookAppoimtment() {
  return (
    <>
      <main className="container mx-auto p-4">
        <div className="bg-white p-8 max-w-xl mx-auto rounded-md shadow-md">
          <div className="text-3xl font-bold mb-4 text-green-500">
            Book Appointment to Register your FIR
          </div>
          <form className="max-w-full">
            <div className="mb-4">
              <label
                htmlFor="pinCode"
                className="block text-sm font-semibold mb-2"
              >
                Enter your Pin Code
              </label>
              <input
                autoFocus
                type="text"
                className="form-input w-full under-label bg-gray-100 p-1"
                id="pinCode"
                name="pinCode"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="policeStation"
                className="block text-sm font-semibold mb-2"
              >
                Select your Police Station
              </label>
              {/* Replace the input type with a dropdown for selecting the police station */}
              <select
                className="form-select w-full bg-gray-100 p-1"
                id="policeStation"
                name="policeStation"
                required
                aria-required="true"
              >
                {/* Add options for different police stations */}
                <option value="policeStation1">Police Station 1</option>
                <option value="policeStation2">Police Station 2</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="dateTime"
                className="block text-sm font-semibold mb-2"
              >
                Select Date and Time for Slot Booking
              </label>
              <input
                type="datetime-local" // Use datetime-local input type for selecting date and time
                className="form-input w-full under-label bg-gray-100 p-1"
                id="dateTime"
                name="dateTime"
                required
              />
            </div>

            <div className="flex items-center">
              <button
                type="submit"
                className="border-2 border-green-500 text-green-500 px-4 py-2 rounded mx-auto hover:bg-green-500 hover:text-white"
              >
                Create Appointment
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default BookAppoimtment;
