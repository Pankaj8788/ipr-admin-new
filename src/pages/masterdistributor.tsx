import MasterDistributorList from "ipadmin/Components/Users/masterDistributor/MasterDistributorList";
import AdminHeader from "ipadmin/Components/commonComponents/AdminHeader";
import MainLayout from "ipadmin/layouts/MainLayout";
import React from "react";

const data = {
  heading: "Master Distributor list",
  title: "Dashboard",
  subTitle: "Master Distributor List",
  message: "Hello,Admin",
};
export default function masterDistributor() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <MasterDistributorList />
    </MainLayout>
  );
}
