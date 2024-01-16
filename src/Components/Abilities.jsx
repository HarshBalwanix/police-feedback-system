import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Import your actual tabs library
import BookAppointment from "@/Components/BookAppointment";
import AppointmentStatus from "./AppointmentStatus";
import RegisteredFIR from "./RegisteredFIR";

const Abilities = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="bookAppointment">Book Appointment</TabsTrigger>
          <TabsTrigger value="appointmentStatus">
            Appointment Status
          </TabsTrigger>
          <TabsTrigger value="registeredFir">Registered FIR</TabsTrigger>
        </TabsList>
        <TabsContent value="bookAppointment">
          <BookAppointment />
        </TabsContent>
        <TabsContent value="appointmentStatus">
          <AppointmentStatus />
        </TabsContent>
        <TabsContent value="registeredFir">
          <RegisteredFIR />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Abilities;
