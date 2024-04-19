import AdminHeader from "ipadmin/Components/commonComponents/AdminHeader";
import Pendings from "ipadmin/Components/report/Pendings";
import MainLayout from "ipadmin/layouts/MainLayout";
import React from "react";

const data = {
  heading: "Pendings",
  title: "Dashboard",
  subTitle: "Pendings",
  message: "Hello,Admin",
};
export default function pendings() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <Pendings />
    </MainLayout>
  );
}
