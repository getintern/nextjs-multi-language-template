import styles from "./DashboardSidebar.module.css";

const DashboardSidebar = ({ children }) => {
  return (
    <div className={styles.containerDashboard}>
      <div className={styles.sidebar}>Sidebar</div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DashboardSidebar;
