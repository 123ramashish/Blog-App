import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function ConsultantCard({ consultant }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-48 md:h-auto">
          <img 
            src={consultant.image} 
            alt={consultant.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-gray-800">{consultant.name}</h3>
              <p className="text-sm text-blue-600 mb-2">{consultant.specialty}</p>
            </div>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {consultant.fees}
            </span>
          </div>
          
          <div className="text-sm text-gray-600 space-y-2 mt-2">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">⭐</span>
              <span>{consultant.experience} experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500">🗣️</span>
              <span>{consultant.languages.join(", ")}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">🕒</span>
              <span>{consultant.availability}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">📍</span>
              <span>{consultant.location}</span>
            </div>
          </div>
          
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <a
              href={consultant.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors text-center"
            >
              Book on {consultant.platform} →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

ConsultantCard.propTypes = {
  consultant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    availability: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    fees: PropTypes.string.isRequired,
  }).isRequired,
};

export default ConsultantCard;