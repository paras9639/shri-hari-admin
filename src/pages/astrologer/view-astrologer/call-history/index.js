import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IndianRupee, secondsToHMS } from "../../../../utils/common-function/index.js";
import MainDatatable from "../../../../components/common/MainDatatable.jsx";
import InvoiceOne from "../../../history/download-invoice/invoice-one";
import * as AstrologerActions from '../../../../redux/actions/astrologerAction.js';

const CallHistory = ({ astrologerId }) => {
    const dispatch = useDispatch();
    const { callHistoryByAstrologerIdData } = useSelector(state => state?.astrologerReducer);

    //* Data-Table Column
    const columns = [
        { name: 'S.No.', selector: (row) => callHistoryByAstrologerIdData.indexOf(row) + 1, width: '80px' },
        { name: 'Astrologer', selector: row => row?.astrologerId?.astrologerName ? row?.astrologerId?.astrologerName : 'N/A' },
        { name: 'Customers', selector: row => row?.customerId?.customerName ? row?.customerId?.customerName : 'N/A' },
        { name: 'Total Price', selector: row => row?.totalPrice && IndianRupee(row?.totalPrice) },
        { name: 'Admin Share', selector: row => row?.adminPrice && IndianRupee(row?.adminPrice) },
        { name: 'Astrologer Share', selector: row => row?.partnerPrice && IndianRupee(row?.partnerPrice) },
        { name: 'Duration', selector: row => row?.duration ? secondsToHMS(row?.duration) : 'N/A' },
        { name: 'Start Time', selector: row => row?.startTime ? moment(row?.startTime).format('hh:mm:ss a') : 'N/A' },
        { name: 'End Time', selector: row => row?.endTime ? moment(Number(row?.endTime)).format('hh:mm:ss a') : 'N/A' },
        { name: 'Date', selector: row => row?.endTime ? moment(row?.createdAt).format('DD MMMM YYYY') : 'N/A', width: "180px" },
        { name: 'Invoice', cell: row => <InvoiceOne data={row} type={'Call'} />, centre: true }
    ];

    useEffect(function () {
        //! Dispatching API for Getting Call History
        dispatch(AstrologerActions.getCallHistoryByAstrologerId({ astrologerId, type: 'call' }));
    }, []);

    return (
        <>
            <MainDatatable data={callHistoryByAstrologerIdData} columns={columns} title={'Call History'} />

        </>
    )
};

export default CallHistory;