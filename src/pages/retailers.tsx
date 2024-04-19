import RetailersList from "ipadmin/Components/Users/retailers/RetailersList";
import AdminHeader from "ipadmin/Components/commonComponents/AdminHeader";
import MainLayout from "ipadmin/layouts/MainLayout";
import React from "react";
const data = {
  heading: "Retailers list",
  title: "Dashboard",
  subTitle: "Retailer List",
  message: "Hello admin",
};
export default function Retailers() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <RetailersList />
    </MainLayout>
  );
}
