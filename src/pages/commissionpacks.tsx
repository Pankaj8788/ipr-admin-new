import { CommissionPacksPage } from "ipadmin/Components/commission/CommissionPacksPage";
import AdminHeader from "ipadmin/Components/commonComponents/AdminHeader";
import MainLayout from "ipadmin/layouts/MainLayout";
import React from "react";
const data = {
  heading: "create commission pack",
  title: "dashboard",
  subTitle: "create commission pack",
};
export default function CommissionPacks() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <CommissionPacksPage />
    </MainLayout>
  );
}
