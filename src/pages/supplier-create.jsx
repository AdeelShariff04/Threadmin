import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import HeaderInner from '@/components/shared/pageHeader/HeaderInner'
import SupplierFormContent from '@/components/forms/supplier-form'

const SupplierCreate = () => {
    return (
        <>
            <PageHeader>
                <HeaderInner listName="Supplier" to="/supplier/add" />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <SupplierFormContent />
                </div>
            </div>
        </>
    )
}

export default SupplierCreate