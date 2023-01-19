import { gql, useQuery } from '@apollo/client'
import {IClients} from "../types/graphql.interface";
import {ClientRow} from "./ClientRow";
import {GET_CLIENTS} from "../queries/clientQueries";
import {Spinner} from "./Spinner";

export const Clients = () => {
  const { loading, error, data } = useQuery<IClients>(GET_CLIENTS)

  if (loading) return <Spinner />
  if (error) return <p>Something Went Wrong</p>

  return (
    <>
      {!loading && !error && (
        <table className={'table table-hover mt-3'}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data && data.clients.map(client => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}