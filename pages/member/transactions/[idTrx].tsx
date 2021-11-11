import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import jwtDecode from 'jwt-decode';
import { HistoryTransactionTypes, JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import { getTransactionDetail } from "../../../services/member";

interface TranscationsDetailProps {
  transactionDetail: HistoryTransactionTypes;
}

export default function TransactionsDetail(props: TranscationsDetailProps) {
  // console.log('data: ', transactionDetail)
  const { transactionDetail } = props;
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    }
  },
  params: {
    idTrx: string;
  }
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  // console.log('paramal: ', params);
  const { idTrx } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  const response = await getTransactionDetail(idTrx, jwtToken);
  // console.log('data: ', response);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}

