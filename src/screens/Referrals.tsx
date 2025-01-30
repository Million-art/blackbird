import { motion } from "framer-motion";
import referralImage from "../assets/friends.png";
import gift from "../assets/gift.png";

const Referrals = () => {
  return (
    <section className="mb-24 text-white flex flex-col items-center">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center mt-8"
      >
        <img src={referralImage} alt="Referrals" className="w-24 h-24 sm:w-16 sm:h-16" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-1 flex flex-col text-center"
      >
        <h1 className="text-lg sm:text-xl font-semibold">Binary Referral System</h1>
        <small className="text-sm sm:text-base text-gray-400">
          Invite two friends and build your team!
        </small>
      </motion.div>
      
      {/* Binary Referral Tree */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 flex flex-col items-center w-full"
      >
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full bg-blue-600 text-white text-center">You</div>
          <div className="w-0.5 h-6 bg-white"></div>
        </div>
        <div className="flex w-full justify-center gap-12">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <div className="p-4 rounded-full bg-green-500">Left Referral</div>
            <small className="text-xs text-gray-400">Earn 2000 points</small>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <div className="p-4 rounded-full bg-red-500">Right Referral</div>
            <small className="text-xs text-gray-400">Earn 2000 points</small>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Reward Information */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col gap-3 mx-6 my-4 sm:mx-12 sm:my-5"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="rounded-xl p-3 flex gap-3 w-full items-center bg-gray-800"
        >
          <img src={gift} alt="gift" className="w-10 h-10" />
          <div>
            <h1 className="text-sm font-normal">Complete a referral pair</h1>
            <small className="text-xs text-gray-400">Earn 5000 points</small>
          </div>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="rounded-xl p-3 flex gap-3 w-full items-center bg-gray-800"
        >
          <img src={gift} alt="gift" className="w-10 h-10" />
          <div>
            <h1 className="text-sm font-normal">Each referral adds to your team</h1>
            <small className="text-xs text-gray-400">Grow your rewards</small>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Referrals;
