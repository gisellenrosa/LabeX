import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import {
  Button,
  BackButtonContent,
  ButtonContent,
  Title,
  TripContainer,
  TripContent,
  TripTitle,
  TripInfo,
  CandidateInfo,
  Span,
  Approved,
} from "./styles";
import { goToAdminHomePage } from "../../routes/coordinator";

export default function TripDetailsPage() {
  useProtectedPage();
  const [trip, setTrip] = useState({});
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    getTripDetail(params.id);
  }, []);

  const getTripDetail = () => {
    const token = window.localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/trip/${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const decideCandidate = (candidateId, decision) => {
    const token = window.localStorage.getItem("token");
    const tripId = trip.id;
    const body = { approve: decision };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/trips/${tripId}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        alert("Decisão cadastrada com sucesso");
        getTripDetail();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToAdminHomePage(history)}>VOLTAR</Button>
      </BackButtonContent>
      <TripContainer>
        <TripContent>
          <TripTitle>{trip.name}</TripTitle>
          <TripInfo>
            Nome: <Span>{trip.name}</Span>
          </TripInfo>
          <TripInfo>
            Descrição: <Span>{trip.description}</Span>
          </TripInfo>
          <TripInfo>
            Planeta:<Span> {trip.planet}</Span>
          </TripInfo>
          <TripInfo>
            Duração: <Span>{trip.durationInDays}</Span>
          </TripInfo>
          <TripInfo>
            Data: <Span>{trip.date}</Span>
          </TripInfo>
        </TripContent>
      </TripContainer>
      <div>
        <Title> Candidatos Pendentes</Title>
        <TripContainer>
          {trip.candidates && trip.candidates.length > 0 ? (
            trip.candidates &&
            trip.candidates.map((candidate) => {
              return (
                <TripContent>
                  <CandidateInfo>
                    Nome: <Span>{candidate.name}</Span>
                  </CandidateInfo>
                  <CandidateInfo>
                    Texto de Candidatura:{" "}
                    <Span>{candidate.applicationText}</Span>
                  </CandidateInfo>
                  <CandidateInfo>
                    Profissão: <Span>{candidate.profession}</Span>
                  </CandidateInfo>
                  <CandidateInfo>
                    Idade: <Span>{candidate.age}</Span>
                  </CandidateInfo>
                  <CandidateInfo>
                    País: <Span>{candidate.country}</Span>
                  </CandidateInfo>
                  <ButtonContent>
                    <Button onClick={() => decideCandidate(candidate.id, true)}>
                      APROVAR
                    </Button>
                    <Button
                      onClick={() => decideCandidate(candidate.id, false)}
                    >
                      REPROVAR
                    </Button>
                  </ButtonContent>
                </TripContent>
              );
            })
          ) : (
            <p> Não há candidatos para aprovar</p>
          )}
        </TripContainer>
      </div>
      <div>
        <Title> Candidatos Aprovados</Title>
        {trip.approved && trip.approved.length > 0 ? (
          trip.approved &&
          trip.approved.map((candidate) => {
            return <Approved>{candidate.name}</Approved>;
          })
        ) : (
          <Approved>Não há candidatos aprovados</Approved>
        )}
      </div>
    </div>
  );
}
