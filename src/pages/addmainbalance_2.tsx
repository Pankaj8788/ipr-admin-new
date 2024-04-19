import AddMainBalance_2 from "ipadmin/Components/balance/AddMainBalance_2";
import AdminHeader from "ipadmin/Components/commonComponents/AdminHeader";
import MainLayout from "ipadmin/layouts/MainLayout";
import React from "react";

const data = {
  heading: "MAIN Reverse Transfer",
  title: "Dashboard",
  subTitle: "MAIN Reverse Transfer",
  message: "Hello,Admin",
};
export default function addmainbalance_2() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <AddMainBalance_2 />
    </MainLayout>
  );
}
