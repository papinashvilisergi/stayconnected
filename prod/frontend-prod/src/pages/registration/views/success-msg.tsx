// import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuccessMsg = () => {
  return (
    <>
      <div className='flex flex-col items-center space-y-2 p-4 text-foreground'>
        <div>
          <Check className='size-16 text-primary' />
        </div>

        <h2 className='text-2xl font-semibold tracking-tight'>
          Your account has been created!
        </h2>
        <p className='text-muted-foreground'>
          Congratulations and welcome to the club
        </p>
        <div>
          <Link to='/login'>
            <Button className='mt-6 bg-primary px-8 font-medium' size='lg'>
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SuccessMsg;
