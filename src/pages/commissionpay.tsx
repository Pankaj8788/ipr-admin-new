import SurchargePay from "ipadmin/Components/commission/CreatePackage";
import AdminHeader from "ipadmin/Components/commonComponents/AdminHeader";
import MainLayout from "ipadmin/layouts/MainLayout";
import React from "react";
const data = {
  heading: "create commission pay",
  title: "dashboard",
  subTitle: "create commission pay",
  message: "Hello Admin",
};
export default function commissionpay() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <SurchargePay />
    </MainLayout>
  );
}
