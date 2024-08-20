'use client';

import { BaseSideBars } from '../components/baseBars';
import DashboardData from './components/page';

export default function Home() {

    return (
        <div className="flex w-full h-full">
            <BaseSideBars>
                <DashboardData />
            </BaseSideBars>
        </div>
    );
}
