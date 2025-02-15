// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card } from "@/components/ui/card";
// import { User, Lock, Mail, RefreshCw, Phone, MapPin, Calendar, Briefcase, ExternalLink, Camera } from "lucide-react";
// import { toast } from "sonner";
// import { Textarea } from "@/components/ui/textarea";

// const Profile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [isProfileEditing, setIsProfileEditing] = useState(false);
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [profileData, setProfileData] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "+1 (555) 123-4567",
//     location: "San Francisco, CA",
//     bio: "Passionate blogger and tech enthusiast. Love writing about new technologies and sharing knowledge with the community.",
//     joinDate: "January 2024",
//     occupation: "Software Engineer",
//     website: "https://johndoe.blog"
//   });

//   const handlePasswordChange = () => {
//     if (newPassword !== confirmPassword) {
//       toast.error("Passwords do not match!");
//       return;
//     }
//     if (newPassword.length < 6) {
//       toast.error("Password must be at least 6 characters long!");
//       return;
//     }
//     toast.success("Password updated successfully!");
//     setIsEditing(false);
//     setNewPassword("");
//     setConfirmPassword("");
//   };

//   const handleProfileUpdate = () => {
//     toast.success("Profile updated successfully!");
//     setIsProfileEditing(false);
//   };

//   return (
//     <div className="min-h-screen bg-leafy-primary/20 relative overflow-hidden">
//       {/* Decorative Background Elements */}
//       <motion.img
//         src="/leaf1.png"
//         alt=""
//         className="absolute top-0 right-0 w-64 opacity-10 -z-10"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.img
//         src="/leaf2.png"
//         alt=""
//         className="absolute bottom-0 left-0 w-64 opacity-10 -z-10"
//         animate={{ rotate: -360 }}
//         transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
//       />

//       <div className="container max-w-4xl mx-auto py-16 px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Card className="backdrop-blur-sm bg-white/80 p-8 rounded-2xl shadow-xl">
//             <div className="flex flex-col md:flex-row items-start gap-8">
//               <div className="w-full md:w-auto flex flex-col items-center gap-4">
//                 <motion.div
//                   className="relative group"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-leafy-accent/20">
//                     <img
//                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                       alt="Profile"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <motion.div 
//                     className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <Camera className="text-white w-6 h-6" />
//                   </motion.div>
//                 </motion.div>
//                 <div className="text-center space-y-1">
//                   <p className="text-sm text-gray-500">Member since</p>
//                   <div className="flex items-center gap-2 text-sm text-gray-600">
//                     <Calendar className="w-4 h-4" />
//                     <span>{profileData.joinDate}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex-1 w-full">
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className="space-y-6"
//                 >
//                   {!isProfileEditing ? (
//                     <div className="space-y-4">
//                       <div className="flex items-center gap-2">
//                         <User className="w-5 h-5 text-leafy-accent" />
//                         <h1 className="text-2xl font-semibold text-leafy-text">{profileData.name}</h1>
//                       </div>
//                       <div className="space-y-3">
//                         <div className="flex items-center gap-2">
//                           <Mail className="w-5 h-5 text-leafy-accent" />
//                           <p className="text-gray-600">{profileData.email}</p>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Phone className="w-5 h-5 text-leafy-accent" />
//                           <p className="text-gray-600">{profileData.phone}</p>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <MapPin className="w-5 h-5 text-leafy-accent" />
//                           <p className="text-gray-600">{profileData.location}</p>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Briefcase className="w-5 h-5 text-leafy-accent" />
//                           <p className="text-gray-600">{profileData.occupation}</p>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <ExternalLink className="w-5 h-5 text-leafy-accent" />
//                           <a href={profileData.website} className="text-leafy-accent hover:underline">{profileData.website}</a>
//                         </div>
//                       </div>
//                       <div className="mt-4">
//                         <p className="text-gray-600 italic">{profileData.bio}</p>
//                       </div>
//                       <Button
//                         onClick={() => setIsProfileEditing(true)}
//                         className="mt-4 bg-leafy-accent hover:bg-leafy-accent/90 text-white"
//                       >
//                         Edit Profile
//                       </Button>
//                     </div>
//                   ) : (
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="space-y-4"
//                     >
//                       <Input
//                         placeholder="Name"
//                         value={profileData.name}
//                         onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
//                         className="bg-white"
//                       />
//                       <Input
//                         placeholder="Email"
//                         value={profileData.email}
//                         onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
//                         className="bg-white"
//                       />
//                       <Input
//                         placeholder="Phone"
//                         value={profileData.phone}
//                         onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
//                         className="bg-white"
//                       />
//                       <Input
//                         placeholder="Location"
//                         value={profileData.location}
//                         onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
//                         className="bg-white"
//                       />
//                       <Input
//                         placeholder="Occupation"
//                         value={profileData.occupation}
//                         onChange={(e) => setProfileData({ ...profileData, occupation: e.target.value })}
//                         className="bg-white"
//                       />
//                       <Input
//                         placeholder="Website"
//                         value={profileData.website}
//                         onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
//                         className="bg-white"
//                       />
//                       <Textarea
//                         placeholder="Bio"
//                         value={profileData.bio}
//                         onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
//                         className="bg-white"
//                       />
//                       <div className="flex gap-2">
//                         <Button
//                           onClick={handleProfileUpdate}
//                           className="bg-leafy-accent hover:bg-leafy-accent/90 text-white"
//                         >
//                           Save Changes
//                         </Button>
//                         <Button
//                           variant="outline"
//                           onClick={() => setIsProfileEditing(false)}
//                         >
//                           Cancel
//                         </Button>
//                       </div>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               </div>
//             </div>

//             <motion.div
//               className="mt-8 space-y-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               <div className="flex items-center gap-2">
//                 <Lock className="w-5 h-5 text-leafy-accent" />
//                 <h2 className="text-xl font-semibold text-leafy-text">Password Settings</h2>
//               </div>

//               {!isEditing ? (
//                 <motion.div
//                   whileHover={{ scale: 1.01 }}
//                   whileTap={{ scale: 0.99 }}
//                 >
//                   <Button
//                     onClick={() => setIsEditing(true)}
//                     className="bg-leafy-accent hover:bg-leafy-accent/90 text-white"
//                   >
//                     <RefreshCw className="w-4 h-4 mr-2" />
//                     Change Password
//                   </Button>
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   className="space-y-4"
//                 >
//                   <Input
//                     type="password"
//                     placeholder="New Password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     className="bg-white"
//                   />
//                   <Input
//                     type="password"
//                     placeholder="Confirm New Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     className="bg-white"
//                   />
//                   <div className="flex gap-2">
//                     <Button
//                       onClick={handlePasswordChange}
//                       className="bg-leafy-accent hover:bg-leafy-accent/90 text-white"
//                     >
//                       Save Changes
//                     </Button>
//                     <Button
//                       variant="outline"
//                       onClick={() => {
//                         setIsEditing(false);
//                         setNewPassword("");
//                         setConfirmPassword("");
//                       }}
//                     >
//                       Cancel
//                     </Button>
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           </Card>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
