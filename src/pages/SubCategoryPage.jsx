import { useParams } from 'react-router-dom';
import SubCategoryContent from '../components/SubCategoryContent';
import CartStrip from '../components/CartStrip';
import BottomNav from '../components/BottomNav';

const SubCategoryPage = () => {
  const { subCategoryName } = useParams();

  return (
    <>
      <SubCategoryContent subCategoryName={subCategoryName} />
      <CartStrip />
      <BottomNav />
    </>
  );
};

export default SubCategoryPage;
