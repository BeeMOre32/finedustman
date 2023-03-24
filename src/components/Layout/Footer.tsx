import { motion } from 'framer-motion';
import React from 'react';
import { Link, useMatches } from 'react-router-dom';
import '../../styles/footer.scss';
function Footer() {
  const match = useMatches();

  return (
    <footer className="footer">
      <Link to={'/'}>
        전체 지역목록
        {match[1].pathname === '/' && (
          <motion.div layoutId="active" className="active"></motion.div>
        )}
      </Link>
      <Link to={'/location'}>
        내 지역 주변보기
        {match[1].pathname === '/location' && (
          <motion.div layoutId="active" className="active"></motion.div>
        )}
      </Link>
      <Link to={'/favorite'}>
        즐겨찾기
        {match[1].pathname === '/favorite' && (
          <motion.div layoutId="active" className="active"></motion.div>
        )}
      </Link>
    </footer>
  );
}

export default Footer;
