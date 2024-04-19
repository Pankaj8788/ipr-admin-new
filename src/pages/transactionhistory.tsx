import AdminHeader from "ipadmin/Components/commonComponents/AdminHeader";
import Pendings_2 from "ipadmin/Components/report/TransactionHistory";
import MainLayout from "ipadmin/layouts/MainLayout";
import React from "react";

const data = {
  heading: "Transaction History",
  title: "Dashboard",
  subTitle: "Transaction History",
  message: "Hello,Admin",
};
export default function pendings_2() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <Pendings_2 />
    </MainLayout>
  );
}
