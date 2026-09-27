import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import ProfileCard from '@/components/cards/profile-card'
import SupplierHistoryCard from '@/components/cards/supplier-historycard'

const SupplierView = () => {
    return (
        <>
            <PageHeader>
                <></>
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <div className="col-md-4 mb-4">
                        <ProfileCard type="supplier" />
                    </div>
                    <div className="col-md-8 mb-4">
                        <SupplierHistoryCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SupplierView