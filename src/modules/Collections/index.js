import React, { useState } from 'react';
import ProfileSettings from '../Profile-settings/index';
import Sidebar from '../../components/common/Profile-sidebar/sidebar';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import CollectionList from './CollectionList';
import ItemList from './ItemList';

const Collections = () => {
  const collections = useSelector((state) => state.collections.collection);
  const [page, setPage] = useState(0);
  const [cName, setClassName] = useState('jsListView');
  const [selectedCollection, setSelectedCollection] = useState(null);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <ProfileSettings />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-8">
              {!page ? (
                <CollectionList
                  cName={cName}
                  setClassName={setClassName}
                  collections={collections}
                  setPage={setPage}
                  setSelectedCollection={setSelectedCollection}
                />
              ) : (
                <ItemList onClick={() => setPage(0)} selectedCollection={selectedCollection} />
              )}
            </div>
            <div className="col-xl-3 col-lg-4 col-md-7">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Collections;
