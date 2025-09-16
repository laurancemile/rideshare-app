import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Loader from "./ui/Loader";

const Login = lazy(() => import("./pages/auth/Login"));
const Signup = lazy(() => import("./pages/auth/Signup"));
const Dashboard = lazy(() => import("./pages/rider/Dashboard"));
const RequestRide = lazy(() => import("./pages/rider/RequestRide"));
const RideHistory = lazy(() => import("./pages/rider/RideHistory"));
const Profile = lazy(() => import("./pages/rider/Profile"));
const Help = lazy(() => import("./pages/rider/Help"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const ManageRides = lazy(() => import("./pages/admin/ManageRides"));
const RideHistoryAdmin = lazy(() => import("./pages/admin/RideHistoryAdmin"));
const Homepage = lazy(() => import("./ui/Homepage"));
const PageNotFound = lazy(() => import("./ui/PageNotFound"));

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			<GlobalStyles />
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/request" element={<RequestRide />} />
						<Route path="/rides" element={<RideHistory />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/help" element={<Help />} />
						<Route path="/admin">
							<Route path="dashboard" element={<AdminDashboard />} />
							<Route path="rides" element={<ManageRides />} />
							<Route path="history" element={<RideHistoryAdmin />} />
						</Route>
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={12}
				toastOptions={{
					success: { duration: 3000 },
					error: { duration: 5000 },
					style: {
						fontFamily: "sans-serif",
						padding: "12px",
						fontSize: "16px",
					},
				}}
			/>
		</QueryClientProvider>
	);
}

export default App;
