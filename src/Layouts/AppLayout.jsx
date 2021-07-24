import Navigation from '@/Layouts/Navigation';
import { useAuth } from '@/hooks/auth';
import { Fragment } from 'react';

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' });

    return (
        <Fragment>
            {user &&
                <div className="min-h-screen bg-gray-100">
                    <Navigation user={user} />

                    {/* Page Heading */}
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>

                    {/* Page Content */}
                    <main>{children}</main>
                </div>
            }
        </Fragment>
    );
};

export default AppLayout;
