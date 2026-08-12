import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home as HomeIcon, ShoppingBag } from 'lucide-react';
import { EmptyState } from '../components/common/EmptyState';
import { Button } from '../components/common/Button';

export const NotFound = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <EmptyState
        icon={AlertCircle}
        title="404 — Page Not Found"
        description="The page you are looking for does not exist, has been moved, or the URL was entered incorrectly."
        actionButton={
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link to="/">
              <Button variant="primary" className="flex items-center gap-2">
                <HomeIcon className="w-4 h-4" /> Back to Home
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="secondary" className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" /> Browse Products
              </Button>
            </Link>
          </div>
        }
      />
    </div>
  );
};

